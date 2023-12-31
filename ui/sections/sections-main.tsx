'use client';

import { type Item } from '#/lib/items';

import Image from 'next/image';

export function SectionsMain({ item }: { item: Item }) {
  return (
    <div className="mb-10 mt-10 text-sm font-medium">
      {item.name && item.name !== '' && (
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
      )}
      {item.paragraphs &&
        item.paragraphs.map((par) => <p className="mb-4 mt-6">{par}</p>)}
      {item.picture &&
        item.picture.map((pic) => {
          return (
            <div>
              <Image src={pic.url} alt="image" />
              {pic.firstSetOfParagraphs &&
                pic.firstSetOfParagraphs.map((par) => (
                  <p className="mb-6 mt-6">{par}</p>
                ))}
              {pic.firstSetOfList &&
                pic.firstSetOfList.map((listItem) => (
                  <ol className="ml-8">
                    {listItem.listItems.map((l, index) => (
                      <li>
                        {listItem.ul ? (
                          <div className="align-center flex">
                            <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-black"></div>{' '}
                            {l}
                          </div>
                        ) : (
                          <div>
                            {index + 1}. {l}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                ))}

              {pic.secondSetOfParagraphs &&
                pic.secondSetOfParagraphs.map((par) => (
                  <p className="mb-6 mt-6">{par}</p>
                ))}
            </div>
          );
        })}
      <ol className="ml-8">
        {item.complexList &&
          item.complexList.map((cItem, index) => (
            <li>
              <div className="text-lg font-bold text-gray-900">
                {index + 1}. {cItem.title}
              </div>
              <ol className="ml-6">
                {cItem.items.map((lItem, index) => (
                  <li>
                    <div className="mt-2 flex">
                      <div className="mr-2">
                        {String.fromCharCode(index + 97)}.
                      </div>
                      {lItem}
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
      </ol>

      {item.complexList &&
        item.complexList.map(
          (par) =>
            par.afterParagraph &&
            par.afterParagraph.map((paragraph) => {
              return <p className="mb-4 mt-6">{paragraph}</p>;
            }),
        )}
      <div className="mt-5 flex flex-row">
        {item.links &&
          item.links.map((l) => (
            <a href={l.url} target="_blank">
              <button className="mr-4 rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100">
                {l.text}
              </button>
            </a>
          ))}
      </div>
    </div>
  );
}
