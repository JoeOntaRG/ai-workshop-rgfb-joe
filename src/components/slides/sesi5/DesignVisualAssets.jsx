import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

const fullPrompt = `Create a premium modern product poster for a wireless ergonomic mouse based on the reference image provided.

Style: minimalist, futuristic, clean tech aesthetic, premium commercial advertisement.

Background: dark matte gradient (black to charcoal) with soft ambient lighting and subtle glow accents.

Main Subject: place the mouse floating at the center with dramatic studio lighting, realistic shadows, and glossy reflections. Keep the exact shape, color, branding, buttons, and ergonomic design from the reference image.

Add visual effects:
- soft blue neon rim light
- subtle particle glow
- depth-of-field blur in background
- smooth shadow beneath the product
- elegant light streaks around the mouse

Typography layout:
- Large bold headline at top: "Precision Meets Comfort"
- Small modern subheadline: "Wireless Ergonomic Mouse for Seamless Productivity"
- Feature highlights in clean icons or minimal text:
  • Silent Click
  • Ergonomic Design
  • Wireless Connectivity
  • Long Battery Life
- Premium call-to-action button at the bottom: "Upgrade Your Workspace"

Composition: centered product, balanced spacing, luxury Apple-style product advertising, high contrast, ultra realistic, cinematic lighting, 4K poster quality, portrait ratio 4:5.

Design mood: sleek, modern, professional, high-end technology advertisement suitable for Instagram ads, e-commerce banners, and electronics campaigns.`;

export default function DesignVisualAssets() {
  return (
    <UseCaseTemplate
      kicker="Design · Use Case 4 of 5"
      title="Poster Produk: GPT × Canva."
      scenario="Bikin poster produk pakai ChatGPT, lalu integrasi ke Canva untuk versi editable."
      tools={['ChatGPT (Image)', 'Canva AI']}
      chat={{
        prompt: 'Create a premium modern product poster for a wireless ergonomic mouse based on the reference image. Dark matte background, soft blue neon rim light, headline "Precision Meets Comfort", CTA "Upgrade Your Workspace", ratio 4:5.',
        image: 'https://cdn-web.ruangguru.com/file-uploader/18c64467-bcd1-4d7e-a671-e531198d8f15.png',
      }}
      copyPrompt={fullPrompt}
    />
  );
}
DesignVisualAssets.displayName = 'DesignVisualAssets';
