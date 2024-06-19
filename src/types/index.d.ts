export type TIndexData = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description?: string;
    authors?: string[];
    categories: string[];
    tags?: string[];
    meta_title?: string;
    image: string;
  };
  render: () => Promise<void>;
};

export type TIntegrationsIndex = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    page_title: string;
    meta_title?: string;
    description?: string;
    image?: string;
  };
  render: () => Promise<void>;
};
