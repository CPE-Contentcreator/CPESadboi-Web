import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div >
      <li onClick={handleClick}>63070501092 Surasee Saenburanapan{open ? <ExpandMore /> : <ExpandLess />}</li>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Link href="https://www.facebook.com/BestboySurasee/"><li><a><FacebookIcon ></FacebookIcon>  Facebook</a></li></Link>
        <Link href="https://www.instagram.com/ssx7ay/"><li><a><InstagramIcon></InstagramIcon>  Instagram</a></li></Link>
        <Link href="https://github.com/TSurasee"><li><a><GitHubIcon></GitHubIcon>  Github</a></li></Link>
      </Collapse>
    </div>
  )
}
