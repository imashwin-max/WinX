import os
import base64
from PIL import Image

pub_dir = r"c:\Users\Akash.M\Downloads\eleviq teach\public"

# Load white and dark logos
white_logo = Image.open(os.path.join(pub_dir, "winx-logo-white.png"))
dark_logo = Image.open(os.path.join(pub_dir, "winx-logo-dark.png"))

icon_size = 512
target_w = 420
target_h = int(white_logo.height * (target_w / white_logo.width))

# 1. White icon
icon_white = Image.new("RGBA", (icon_size, icon_size), (0, 0, 0, 0))
resized_white = white_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
pos_x = (icon_size - target_w) // 2
pos_y = (icon_size - target_h) // 2
icon_white.paste(resized_white, (pos_x, pos_y), resized_white)
icon_white.save(os.path.join(pub_dir, "winx-icon-white.png"))

# 2. Dark icon
icon_dark = Image.new("RGBA", (icon_size, icon_size), (0, 0, 0, 0))
resized_dark = dark_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
icon_dark.paste(resized_dark, (pos_x, pos_y), resized_dark)
icon_dark.save(os.path.join(pub_dir, "winx-icon-dark.png"))

# 3. Generate favicon.svg
with open(os.path.join(pub_dir, "winx-icon-white.png"), "rb") as f:
    b64 = base64.b64encode(f.read()).decode("utf-8")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="22" fill="#0F172A"/>
  <image href="data:image/png;base64,{b64}" x="10" y="10" width="80" height="80" preserveAspectRatio="xMidYMid meet" />
</svg>
"""

with open(os.path.join(pub_dir, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Icons and favicon generated successfully!")
