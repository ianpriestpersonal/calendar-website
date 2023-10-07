import Link from 'next/link';

export default function Footer () {
    return (<div class="footer">
        <div><Link href="about" className="internal">About</Link></div> <div>info(at)know-the-seasons.today</div>
      </div>)
}
