import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "animal",
      title: "Animal",
      type: "string",
      options: {
        list: [
          { title: "Cat", value: "cat" },
          { title: "Dog", value: "dog" },
          { title: "Bird", value: "bird" },
          { title: "Fish", value: "fish" },
        ],
      },
    }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
