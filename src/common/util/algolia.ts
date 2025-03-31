import algoliasearch from 'algoliasearch/lite';
import { SearchResponse } from 'algoliasearch-helper/types/algoliasearch';

// AlgoliaのApplication IDとSearch-Only API Keyを設定
const appId = process.env.NEXT_PUBLIC_APPLICATION_ID;
const searchKey = process.env.NEXT_PUBLIC_SEARCH_ONLY_API_KEY;
const indexName = process.env.NEXT_PUBLIC_INDEX_NAME;

// Algoliaクライアントを初期化
const client = algoliasearch(appId!, searchKey!);
const index = client.initIndex(indexName!);

async function test() {
  const result: SearchResponse<any> = await index.search('立命館大学');
  console.log('result');
  console.log(result);
  console.log(JSON.stringify(result));
}

async function search(word: string, hitsPerPage: number = 20): Promise<any[]> {
  let page = 0;
  let allHits: any[] = [];
  let finalData: SearchResponse<any>;

  async function fetchPage() {
    const result = await index.search(word, {
      hitsPerPage,
      page,
    });
    finalData = result;

    allHits = allHits.concat(result.hits);
    console.log(`Fetched page ${page + 1} of ${result.nbPages}`);

    if (page + 1 < result.nbPages) {
      page++;
      await fetchPage(); // 次のページを再帰的に取得
    }
  }

  await fetchPage();
  return allHits;
}

export { index, test, search };
