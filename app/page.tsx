import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div className={'m-4'}>
        <Button>
            Click me biatch
        </Button>
        <Input />
    </div>
  )
}
