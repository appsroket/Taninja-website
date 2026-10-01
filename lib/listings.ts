export type Listing = {
  address: string;
  town: string;
  price: string;
  status: "For Sale" | "For Rent" | "Under Contract" | "Sold";
  beds: number;
  baths: number;
  sqft?: number;
  image: string;
  link?: string;
};

// Add listings here as they come in. Images go in /public/listings.
export const listings: Listing[] = [];
