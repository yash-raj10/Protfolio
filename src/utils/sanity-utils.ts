import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export async function getSkills() {
  const data = await client.fetch(groq`*[_type=="skill"]{
        _id,
        title,
        "image":image.asset->url
    }`);

  return data;
}
