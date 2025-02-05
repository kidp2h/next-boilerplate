'use client';

import { ModeToggle } from '@/components/common/mode-toggle';
import { Button } from '@/components/ui/button';
import { useGlobalStore } from '@/providers/global-store-provider';

export default function Home() {
  const { count, increase } = useGlobalStore(state => state);
  return (
    <div>
      <div className="flex w-full justify-between p-2">
        <div className="flex items-center font-bold underline ">
          NextJS Template
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
      <div className=" p-5">
        <div>
          Counter:
          {count}
        </div>

        <Button
          onClick={() => {
            increase();
          }}
        >
          Increase
        </Button>
      </div>
    </div>
  );
}
