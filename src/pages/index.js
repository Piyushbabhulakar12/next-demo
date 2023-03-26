import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavbarApp from '../../components/Navbar/Navbar'
import HomePage from '../../components/HomePage'

export default function Home() {
  return (
    <>
    <HomePage />
    </>
  )
}
