import { AccountSettings } from '@stackframe/stack';
import  Link  from 'next/link';
export default function MyAccountPage() {
  return (
    <AccountSettings
      fullPage={true}

      extraItems={[{
        title: 'Go back',
        iconName: "ArrowLeft",
        content: <CustomContent />,
        id: 'go-back',
      }]}
    />
  );
}
function CustomContent(){
    return(
         <Link href={"/"}>
              <span  className='text-blue-600  underline text-2xl'>Go back</span>
          </Link>
    )
   
}