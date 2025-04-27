# Duke LDOC 2025 Website

This project is a website for Duke University's Last Day of Classes (LDOC) event in 2025.  It provides a schedule of events, interactive elements, and information about the event. The website is now archived and contains links to previous years' content.


## Features

* **Interactive Schedule:** View the LDOC 2025 schedule, filter by category and location, and search for specific events.  Includes expandable sections for sub-events (e.g., breakfast locations, concert lineup).
* **Artist Reveal:** A dedicated page showcasing the artists for the LDOC concert.  Includes a countdown timer and a YouTube embed for the official artist reveal video.
* **Interactive Games:** Two interactive games, "Lavardoc" and "Hint," provide puzzle-like experiences for users.
* **Responsive Design:** The website is designed to be responsive and work seamlessly across various devices (desktops, tablets, and mobile phones).
* **Customizable Themes:**  Uses a custom color palette and fonts.
* **Google Analytics Integration:**  Tracks website usage with Google Analytics.

## Usage

The website is divided into several pages:

* `/`: Homepage with links to other sections.
* `/schedule`:  Detailed LDOC schedule.
* `/artistreveal`:  LDOC artist reveal.
* `/lavardoc`:  Lavardoc interactive game.
* `/hint`:  Hint interactive game.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/[GitHubUsername]/ldocartistreveal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ldocartistreveal
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## Technologies Used

* **Next.js:**  A React framework for building web applications. Used for the overall website structure and routing.
* **React:** A JavaScript library for building user interfaces. Used to build the website's components.
* **Tailwind CSS:** A utility-first CSS framework. Used for styling the website.
* **TypeScript:** A superset of JavaScript that adds static typing.  Used for improved code maintainability and error detection.
* **Google Fonts:**  Provides custom fonts for the website.  Specifically `Geist` and a custom font named LoveCraft.
* **Google Analytics:** Used for website analytics tracking.


## Configuration

The website uses a `tailwind.config.ts` file for Tailwind CSS configuration and a `next.config.ts` file for Next.js configuration.  Custom fonts are imported and set as CSS variables.


## Dependencies

The project's dependencies are listed in the `package.json` file.


## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.


## Testing

No formal testing framework is implemented in this project.



*README.md was made with [Etchr](https://etchr.dev)*