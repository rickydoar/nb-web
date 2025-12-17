# Nina Belloni Real Estate Website

A professional real estate website built with Next.js 15, TypeScript, and Tailwind CSS for Nina Belloni at Coldwell Banker.

## Features

- Clean, modern design inspired by leading real estate websites
- Responsive navigation with transparent header overlay
- Portfolio showcase (Active Listings & Past Transactions)
- 12 Marin County community pages
- About/Bio page
- Contact form with newsletter signup
- Professional footer matching design specifications

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nb-web/
├── app/                    # Next.js app router pages
│   ├── about/             # About/Bio page
│   ├── communities/       # Communities hub and individual pages
│   ├── contact/           # Contact form page
│   ├── portfolio/         # Portfolio hub, active listings, past transactions
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation with transparent mode
│   ├── Footer.tsx         # Footer with contact info and newsletter
│   ├── PropertyCard.tsx   # Property display component
│   └── ...
├── lib/data/             # Data files
│   ├── agent.ts          # Agent information
│   ├── properties.ts     # Property listings
│   └── communities.ts    # Community data
└── public/images/        # Image assets
```

## Customization

### Adding Nina's Professional Photo

1. Add Nina's professional headshot to `public/images/`
2. Update the hero section in `app/page.tsx` to use the new image
3. Update the about page image placeholder as needed

### Updating Property Listings

Edit `lib/data/properties.ts` to add or modify property listings.

### Updating Community Information

Edit `lib/data/communities.ts` to modify community descriptions or add new communities.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Google Fonts (Cormorant Garamond, DM Sans)

## License

Private project for Nina Belloni Real Estate.
