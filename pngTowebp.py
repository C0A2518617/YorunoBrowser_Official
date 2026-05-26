from __future__ import annotations

import argparse
from pathlib import Path
import sys

try:
	from PIL import Image
except ImportError as exc:  # pragma: no cover - runtime dependency hint
	raise SystemExit(
		"Pillow is required. Install it with: /usr/local/bin/python3 -m pip install pillow"
	) from exc


def iter_png_files(root: Path):
	for path in root.rglob("*"):
		if path.is_file() and path.suffix.lower() == ".png":
			yield path


def convert_png_to_webp(png_path: Path, *, lossless: bool, quality: int, method: int) -> bool:
	webp_path = png_path.with_suffix(".webp")

	try:
		with Image.open(png_path) as image:
			image.save(
				webp_path,
				format="WEBP",
				lossless=lossless,
				quality=quality,
				method=method,
			)
	except Exception as exc:
		print(f"skip: {png_path} ({exc})", file=sys.stderr)
		return False

	try:
		png_path.unlink()
	except OSError as exc:
		print(f"warning: wrote {webp_path} but could not delete {png_path} ({exc})", file=sys.stderr)
		return False

	print(f"converted: {png_path} -> {webp_path}")
	return True


def main() -> int:
	parser = argparse.ArgumentParser(
		description="Recursively convert PNG files to WEBP and remove the original PNG files."
	)
	parser.add_argument(
		"root",
		nargs="?",
		default=".",
		help="Root directory to scan. Defaults to the current directory.",
	)
	parser.add_argument(
		"--lossless",
		action="store_true",
		help="Encode WEBP losslessly. Slower, but preserves pixels exactly.",
	)
	parser.add_argument(
		"--quality",
		type=int,
		default=80,
		help="WEBP quality for lossy encoding. Defaults to 80.",
	)
	parser.add_argument(
		"--method",
		type=int,
		default=4,
		choices=range(0, 7),
		help="WEBP encoder effort from 0 (fastest) to 6 (slowest). Defaults to 4.",
	)
	args = parser.parse_args()

	root = Path(args.root).expanduser().resolve()
	if not root.exists():
		print(f"error: path does not exist: {root}", file=sys.stderr)
		return 1
	if not root.is_dir():
		print(f"error: path is not a directory: {root}", file=sys.stderr)
		return 1

	converted = 0
	try:
		for png_path in iter_png_files(root):
			if convert_png_to_webp(
				png_path,
				lossless=args.lossless,
				quality=args.quality,
				method=args.method,
			):
				converted += 1
	except KeyboardInterrupt:
		print("interrupted: stopped before finishing all conversions", file=sys.stderr)
		return 130

	print(f"done: converted {converted} file(s)")
	return 0


if __name__ == "__main__":
	raise SystemExit(main())
