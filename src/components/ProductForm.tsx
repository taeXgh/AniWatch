import { useState } from "react";
import type { Product } from "../types";

interface Props {
  product: Product | null;
  onSave: (data: Partial<Product>) => void;
  onCancel: () => void;
}

export default function ProductForm({ product, onSave, onCancel }: Props) {
  // TODO: Add one useState per field in your Product type. When editing, seed
  // each state value from `product` so the form is pre-populated.
  //
  // Example:
  const [title, setTitle] = useState(product?.title ?? "");
  const [genre, setGenre] = useState(product?.genre ?? "");
  const [episodes, setEpisodes] = useState(product?.episodes ?? 0);
  const [rating, setRating] = useState(product?.rating ?? 0);
  const [releaseYear, setReleaseYear] = useState(product?.release_year ?? 0);

  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // TODO: Validate required fields, then call onSave with them.
    //
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (rating < 0 || rating > 5) {
      setError("Rating must be between 0 and 5");
      return;
    }
    if (!genre.trim()) {
      setError("Genre is required");
      return;
    }

    // onSave({ title, rating, ... });

    onSave({ title, genre, episodes, rating, release_year: releaseYear });
  }

  return (
    <div>
      <h2>{product ? "Edit Item" : "Add New Item"}</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>

        <label>
          Episodes
          <input
            type="number"
            min={0}
            value={episodes}
            onChange={(e) => setEpisodes(Number(e.target.value))}
          />
        </label>

        <label>
          Rating (out of 5)
          <input
            type="number"
            min={0}
            max={5}
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </label>

        <label>
          Release Year
          <input
            type="number"
            value={releaseYear}
            min={1900}
            onChange={(e) => setReleaseYear(Number(e.target.value))}
          />
        </label>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button className="primary" type="submit">
            {product ? "Save Changes" : "Add Item"}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
