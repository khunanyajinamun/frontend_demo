import Link from "next/link";

export default function Home() {
  return (
    <>
    <center>
      <h1>Khunanya Jinamun</h1>
    </center>
    <br></br>
    
    <center>
          <Link href="/">หน้าหลัก</Link> | 
          <Link href="/about">เกี่ยวกับ</Link> | 
          <Link href="/service">บริการ</Link> | 
          <Link href="/contact">ติดต่อ</Link>
    </center>
  </>
  );
   
}
