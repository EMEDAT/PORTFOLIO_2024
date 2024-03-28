import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xfzpmdwd',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-21',
  token: 'skWTtSIaowubGBhOLfyQmcmmaL2mZpPQShy49RZ41vLPQ64Iy9fSOtEGKvSTcYxLwk93PzQEtCAAkUxbu4OgfTRHu6tNSeBPFfOD9r9Ji0IFbF7zoxESRZfJaMBn0zVjFRDh8yPsgHuk4gL4zy1hg7SPODJ24NqL7onSJ1o2H6zfGfOyOUFQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
