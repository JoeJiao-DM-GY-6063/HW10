# 0
This project is a music visualization built with p5.js. It features dynamic water ripples and spectrum bars that react to the rhythm and frequency of the music.

I've picked a track-rich music from BabyMetal's 《メギツネ - MEGITSUNE》

# Features
Water Ripple Effect
Generates ripples at the center of the canvas that expand and fade over time.
The ripple size is dynamically mapped based on low-frequency energy (20Hz to 200Hz) using fft.getEnergy(20, 200).
Creates a visually rhythmic representation of the song's beats.

Spectrum Bars
Displays 20 vertical bars representing the frequency spectrum of the audio.
Bar colors range from blue to red, mapped by their position in the spectrum.
Bar height changes dynamically according to the intensity of the frequency bands.

Click anywhere on the canvas to play the music.

# 1
# Features
Waveform Bar Chart
The song’s waveform is analyzed using getPeaks(), dividing the audio into small segments.
Each bar represents the energy of a segment, with its height and color dynamically mapped to the waveform's amplitude.
Bars are displayed symmetrically on the canvas to provide a balanced visualization.
Image FALL Overlay.

A central image (fall.png) is displayed, scaled down for a subtle overlay effect.
Inspired by the film 《Upside Down》 (2012),The choice of music is 《the Imperial March》

