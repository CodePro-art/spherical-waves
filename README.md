# Interference of Spherical Waves

## Overview

This project visualizes the interference pattern of spherical waves.
It provides interactive controls to adjust various parameters such as the number
of sources, spacing, wavelength, mode, colormap, and brightness, helping students
understand the fundamental concepts of wave interference.

![image](/assets/spherical-wave.png)

## Features

- **Interactive Visualization**: Real-time rendering of spherical wave interference patterns.
- **Adjustable Parameters**:
  - Number of sources
  - Spacing between sources
  - Wavelength
  - Mode (Field or Intensity)
  - Colormap (Jet, Greys, Hot)
  - Brightness
- **Mathematical Representation**: Displays the mathematical formula of wave interference.

## Usage

### Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone git@github.com:CodePro-art/spherical-waves.git
    cd spherical-wave-interference
    ```

2. Open `index.html` in your web browser to view the project.

### Controls

- **Number of Sources**: Use the slider to adjust the number of wave sources from 1 to 8.
- **Spacing**: Use the slider to adjust the spacing between the sources from 0 to 1000 units.
- **Wavelength**: Use the slider to adjust the wavelength from 300 to 900 units.
- **Mode**: Select between "Field" and "Intensity" to change the mode of visualization.
- **Colormap**: Choose from "Jet", "Greys", and "Hot" colormaps.
- **Brightness**: Use the slider to adjust the brightness from 500 to 5000 units.

## Theory Background

### Wave Interference

The interference of waves occurs when two or more waves overlap and combine to form a new wave pattern. The interference pattern is described by the formula:

$` I^2 = I_1^2 + I_2^2 + 2\sqrt{I_1I_2}\cos\left(2\pi\frac{r_2 - r_1}{\lambda}\right) `$

where:

- $` I `$ is the intensity of the resulting wave.
- $` I_1 `$ and $` I_2 `$ are the intensities of the individual waves.
- $` r_1 `$ and $` r_2 `$ are the distances from the sources.
- $` \lambda `$ is the wavelength.

### Field and Intensity Modes

- **Field Mode**: Visualizes the field strength of the waves.
- **Intensity Mode**: Visualizes the intensity (power) of the waves.

## Link to Site

- Link: [https://spherical-wave.netlify.app/](https://spherical-wave.netlify.app/)

## Contributing

Contributions are welcome! If you have ideas for improvements or have found a bug, please open an issue or submit a pull request. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any questions or further information, feel free to contact:

- Netanel Mazuz: [netazuz@gmail.com](mailto:netazuz@gmail.com)
- GitHub: [CodePro-art](https://github.com/CodePro-art)
