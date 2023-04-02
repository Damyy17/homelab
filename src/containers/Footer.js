import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/Containers-scss/Footer.scss"

function Footer() {
    const footerLinks = [
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "home",
            path: "/homelab"
        },
        {
            title: "Classes",
            path: "/Classes"
        },
        {
            title: "Articles",
            path: "/Articles"
        },
        {
            title: "About us",
            path: "/Abou-Us"
        },
        {
            title: "Instagram",
            path: "/Instagram"
        },
        {
            title: "TikTok",
            path: "/TikTok"
        },
        {
            title: "Account",
            path: "/Account"
        },
        {
            title: "Privacy",
            path: "/Account"
        },
        {
            title: "React",
            path: "/Account"
        },
        {
            title: "Account",
            path: "/Account"
        },
        {
            title: "Privacy",
            path: "/Account"
        },
        {
            title: "React",
            path: "/Account"
        }
    ]
  return (
    <section className="footer">
        <div className="footer-info">
            <p>Stay with HomeLab Comunity</p>
            <article>
            We are HomeLab, and we’re gonna get the memorizing study technique out of business.
            </article>
            <div className="footer-social-icons">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" 
                 xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 21.5189C41 10.4745 32.0462 1.51709 20.9982 1.51709C9.95385 1.51709 1 10.4709 1 21.5189C1 31.5003 8.31331 39.7773 17.8766 
                        41.2761V27.2979H12.7956V21.5189H17.8731V17.111C17.8731 12.0973 20.86 9.33001 25.4273 9.33001C27.6171 9.33001 29.906 9.71977 29.906 
                        9.71977V14.6414H27.3832C24.8994 14.6414 24.1234 16.1827 24.1234 17.763V21.5153H29.6686L28.7828 27.2979H24.1269V41.2726C33.6867 39.7738 41 
                         31.5003 41 21.5189Z" stroke="#FFF9F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" 
                 xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0018 1.51709C9.95385 1.51709 1 10.4709 1 21.5153C1 32.5632 9.95385 41.5171 21.0018 41.5171C32.0462 41.5171 41 32.5632 41 21.5153C41 10.4709 32.0462 1.51709 21.0018 1.51709ZM32.7265 26.1712C32.7265 30.0546 29.5659 33.2152 25.6824 33.2152H16.3176C12.4341 33.2152 9.27708 30.0546 9.27708 26.1712V16.8063C9.27708 12.9229 12.4341 9.76228 16.3176 9.76228H25.6824C29.5659 9.76228 32.7265 12.9229 32.7265 16.8063V26.1712ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM27.2096 16.7C26.4513 16.7 25.8348 16.0835 25.8348 15.3252C25.8348 14.567 26.4513 13.9504 27.2096 13.9504C27.9678 13.9504 28.5844 14.567 28.5844 15.3252C28.5844 16.0835 27.9678 16.7 27.2096 16.7ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878ZM21.0974 17.7878C19.0565 17.7878 17.3983 19.4496 17.3983 21.487C17.3983 23.5279 19.0565 25.1897 21.0974 25.1897C23.1384 25.1897 24.7966 23.5279 24.7966 21.487C24.7966 19.4496 23.1384 17.7878 21.0974 17.7878Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" 
                 xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9981 1.51709C9.95377 1.51709 1 10.5367 1 21.6623C1 32.7917 
                     9.95377 41.8114 20.9981 41.8114C32.0462 41.8114 41 32.7917 41 
                     21.6623C41 10.5367 32.0462 1.51709 20.9981 1.51709ZM31.3883 
                      19.3407H31.3844C31.182 19.3603 30.9757 19.3721 30.7693 19.3721C28.5153 
                       19.3721 
                      26.4131 18.227 25.1791 16.3289V26.6976C25.1791 30.929 21.7727 34.3564 
                       17.5723 34.3564C13.3718 34.3564 9.96545 30.929 9.96545 26.6976C9.96545 
                       22.4623 13.3718 19.0348 17.5723 19.0348C17.728 19.0348 17.8837 19.0466 
                        18.0394 19.0583V22.8348C17.8837 22.8152 17.7319 22.7878 17.5723 
                        22.7878C15.4273 22.7878 13.6871 24.5368 13.6871 26.6976C13.6871 28.8584 
                         15.4273 30.6074 17.5723 30.6074C19.7173 30.6074 21.6092 28.9054 
                         21.6092 26.7446L21.6482 9.13674H25.2336C25.5723 12.376 28.165 14.9093 
                          31.3883 15.1446V19.3407V19.3407Z" stroke="white" stroke-width="2" 
                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <span>
                +060797688
            </span>
        </div>
        <div className="footer-all-links">
            {footerLinks.map((item,index)=>{
                return(
                    <Link to={item.path} className='footer-link'>
                    {item.title}
                    </Link>
                )
            })}
        </div>
        <div className="footer-news-latter">
            <p>News Latter</p>
            <form action="">
                <label htmlFor="userName">Your Name</label>
                <span className="input-icon">
                    <input type="text" name='userName' />
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 22.7658H1C1 18.2719 4.62247 14.6279 9.08989 
                         14.6279H12.9101C17.3775 14.6279 21 18.2719 21 22.7658Z" stroke="white" 
                          stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke- 
                           linejoin="round"/>
                        <path d="M10.9999 13.0458C14.1646 13.0458 16.7302 10.465 16.7302 
                         7.28144C16.7302 4.09788 14.1646 1.51709 10.9999 1.51709C7.83509 1.51709 
                          5.26953 4.09788 5.26953 7.28144C5.26953 10.465 7.83509 13.0458 10.9999 
                           13.0458Z" stroke="white" stroke-width="2" stroke-miterlimit="10" 
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <label htmlFor="mail">Your mail</label>
                <span className='input-icon'>
                    <input type="text" name='mail' />
                    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.59375 1.76611H30.4059L30.4007 20.3961H1.59375V1.76611Z" 
                         stroke="white" stroke-width="2" stroke-miterlimit="10" stroke- 
                          linecap="round" stroke-linejoin="round"/>
                        <path d="M19.0879 9.2621L28.8056 3.53418" stroke="white" stroke-width="2" 
                         stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.11719 3.53418L10.1292 7.64334" stroke="white" stroke-width="2" 
                         stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.0088 14.8188C18.0146 14.8188 19.6406 13.1928 19.6406 
                         11.187C19.6406 9.1812 18.0146 7.55518 16.0088 7.55518C14.003 7.55518 
                          12.377 9.1812 12.377 11.187C12.377 13.1928 14.003 14.8188 16.0088 
                           14.8188Z" stroke="white" stroke-width="2" stroke-miterlimit="10" 
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <button>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Footer