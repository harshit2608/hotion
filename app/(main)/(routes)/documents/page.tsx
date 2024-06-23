'use client';

import Image from 'next/image';

const DocumentsPage = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:block"
      />
    </div>
  );
};

export default DocumentsPage;
