import { useQuery } from "@tanstack/react-query";

const PLACE_ID = "ChIJDXTJGRABrLsR";
const MAX_REVIEWS = 8;
const MIN_RATING = 4;

// Static fallback reviews shown when API key is not configured or request fails
const STATIC_REVIEWS = [
  {
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Excellent stay! The rooms were spotless and the staff was incredibly helpful. Perfect location for our temple pilgrimage to Tiruvannamalai.",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Amazing experience! The breakfast was delicious and the AC rooms were very comfortable. Highly recommended for anyone visiting Arunachaleswarar Temple.",
  },
  {
    name: "Arun Prasad",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Best hotel in Tiruvannamalai! The staff went above and beyond to make our pilgrimage trip memorable. Clean rooms, great service.",
  },
  {
    name: "Meena Subramaniam",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    text: "Very comfortable stay. The hotel is peaceful and well-maintained. The location is ideal — we could reach the temple easily every morning.",
  },
  {
    name: "Vikram Nair",
    location: "Kochi, Kerala",
    rating: 4,
    text: "Great value for money. Rooms are clean and spacious. Staff is friendly and the complimentary breakfast was a nice touch.",
  },
  {
    name: "Sunita Reddy",
    location: "Vijayawada, Andhra Pradesh",
    rating: 5,
    text: "We stayed here during Karthigai Deepam and it was a perfect base. The management was very accommodating and the rooms were well air-conditioned.",
  },
  {
    name: "Karthik Raman",
    location: "Madurai, Tamil Nadu",
    rating: 4,
    text: "Good hotel with clean facilities. The front desk team was helpful in arranging a cab for Girivalam. Would definitely return.",
  },
  {
    name: "Anitha Venkatesh",
    location: "Puducherry",
    rating: 5,
    text: "UJ Pallazzio offers a truly premium experience in Tiruvannamalai. Comfortable beds, hot water, and a calm environment. Highly recommended!",
  },
];

async function fetchGoogleReviews(apiKey) {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en&key=${apiKey}`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-FieldMask": "reviews",
    },
  });

  if (!response.ok) {
    throw new Error(`Google Places API error: ${response.status}`);
  }

  const data = await response.json();
  const rawReviews = data.reviews || [];

  return rawReviews
    .filter((r) => r.rating >= MIN_RATING)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, MAX_REVIEWS)
    .map((r) => ({
      name: r.authorAttribution?.displayName || "Valued Guest",
      location: "",
      rating: r.rating,
      text: r.text?.text || "",
    }));
}

export function useGoogleReviews() {
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const hasApiKey = Boolean(apiKey);

  const query = useQuery({
    queryKey: ["google-reviews", PLACE_ID],
    queryFn: () => fetchGoogleReviews(apiKey),
    enabled: hasApiKey,
    staleTime: 1000 * 60 * 60, // 1 hour cache
    gcTime: 1000 * 60 * 60 * 6, // 6 hours garbage collection
    retry: 1,
  });

  // Use static fallback if no API key or query failed / has no data
  const useStatic = !hasApiKey || query.isError || (!query.isLoading && !query.data?.length);

  return {
    reviews: useStatic ? STATIC_REVIEWS : (query.data ?? []),
    isLoading: hasApiKey && query.isLoading,
    isLive: !useStatic,
  };
}
