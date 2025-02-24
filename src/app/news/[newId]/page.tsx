import { notFound } from "next/navigation";
import Head from "next/head";
import Breadcrumb from "@/components/ui/BreadCrumProps";
import TableOfContents from "@/components/ui/TableOfContents";

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
}

async function fetchArticle(newId: string): Promise<Article | null> {
  return {
    id: newId,
    title: "Đây là bài báo thử nghiệm",
    publishedAt: new Date().toISOString(),
    content: `
      <h2 id="gioi-thieu">Phần 1: Giới thiệu</h2>
      <p>Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.</p>
      <h2 id="noi-dung">Phần 2: Nội dung chính</h2>
      <p>Thông tin chi tiết về bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.
      Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.Nội dung thử nghiệm của bài báo.</p>
      <img src="https://media.loveitopcdn.com/26498/10-du-an-trong-cay-xanh-tren-khap-the-gioi.jpg" alt="Hình ảnh minh họa">
    `,
  };
}

export default async function NewsDetail({ params }: { params: { newId: string } }) {
  const article = await fetchArticle(params.newId);
  if (!article) return notFound();

  // Trích xuất các heading để tạo mục lục
  const headings = Array.from(
    article.content.matchAll(/<h2 id="(.*?)">(.*?)<\/h2>/g)
  ).map((match) => ({
    id: match[1],
    text: match[2],
  }));

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="w-full max-w-full lg:max-w-4xl mx-auto p-6 border rounded-lg shadow-sm bg-white">
        <Breadcrumb items={[
          { label: "Trang chủ", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title }
        ]} />

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500">Đăng vào: {new Date(article.publishedAt).toLocaleString()}</p>

        <TableOfContents headings={headings} />

        <article
          className="article-content mt-6 leading-7"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </>
  );
}
