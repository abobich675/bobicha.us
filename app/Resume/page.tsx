import Image from 'next/image'

export default function Page() {
  return(
  <>
    <div className='p-15 w-full'>
      <div className="text-4xl pb-5"> My Resume </div>
      <div className="text-xl">
        My Resume is available for <a href='Adam_Bobich_Resume.pdf' download className='text-blue'><u>download as a pdf</u></a>.
      </div>
    </div>
    <br />
    <br />
    
  </>
  )
}