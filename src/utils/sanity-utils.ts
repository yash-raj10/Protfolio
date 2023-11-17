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

export async function getPosts() {
  const data = await client.fetch(groq`*[_type=="post"]{
        ...,
        "mainImage":mainImage.asset->url,
    }`);

  return data;
}

export async function getProjects() {
  const data = await client.fetch(groq`*[_type=="project"]{
        ...,
        "mainImage":mainImage.asset->url,
        name,
    }`);

  return data;
}
