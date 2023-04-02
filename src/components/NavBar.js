import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Componets-scss/NavBar.scss'

export default function NavBar({typeBackround}) {
  const [NavLinkToggle, setNavLinkToggle] = useState(0)
  const toggleLink = (Index)=>{
    if(NavLinkToggle === Index){
      return "Active"
    }else{
      return " "
    }
  }
  const menuItem = [
    {
      key: 1,
      ClassName: "link",
      title: "Home",
      link: "/"
    },
    {
      key: 2,
      ClassName: "link",
      title: "Clasess",
      link: "/Clasess"
    },
    {
      key: 3,
      ClassName: "link",
      title: "Articles",
      link: "/Articles"
    },
    {
      key: 4,
      ClassName: "link",
      title: "About us",
      link: "/About us"
    }
  ]
  return (
        <nav>
          <button className='close-button'
          onClick={()=>{
            typeBackround("inactive")
          }}
          >
        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L32 32" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M31.9963 2L2 32" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/></svg>
        </button>
            <button className='logo'>
              <svg viewBox="0 0 165 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_704_55)"> 
                  <path d="M15.2067 1.69302C15.3863 1.36161 15.6883 1.12963 16.1127 0.997064C16.5371 0.8645 17.074 0.798218 17.7234 0.798218C18.3728 0.798218 18.886 0.852803 19.267 0.963923C19.6479 1.07504 19.9381 1.20761 20.1394 1.36161C20.3408 1.51562 20.4967 1.73786 20.6092 2.02443C20.7217 2.40068 20.777 2.97578 20.777 3.74777V22.1488C20.777 22.6576 20.7592 23.0397 20.7257 23.2931C20.6921 23.5466 20.5855 23.8409 20.4059 24.1724C20.0921 24.7689 19.2196 25.0672 17.7866 25.0672C16.2193 25.0672 15.3015 24.6578 15.033 23.841C14.8988 23.4647 14.8317 22.8916 14.8317 22.1176V15.388H5.94136V22.1508C5.94136 22.6596 5.92359 23.0417 5.89004 23.2951C5.85648 23.5485 5.74989 23.8429 5.57027 24.1743C5.25642 24.7708 4.38397 25.0691 2.95094 25.0691C1.38368 25.0691 0.465834 24.6597 0.197387 23.8429C0.0671117 23.4667 0 22.8916 0 22.1176V3.71657C0 3.20776 0.0177649 2.82762 0.0513207 2.57224C0.0848765 2.3188 0.191466 2.02443 0.371088 1.69302C0.684934 1.09649 1.55739 0.798218 2.99042 0.798218C4.55767 0.798218 5.48539 1.20761 5.77753 2.02443C5.89004 2.40068 5.94531 2.97578 5.94531 3.74777V10.5105H14.8416V3.71657C14.8416 3.20776 14.8593 2.82762 14.8929 2.57224C14.9225 2.3188 15.0291 2.02443 15.2067 1.69302Z" className='color1'/>
                  <path d="M35.0154 0.5C38.3275 0.5 41.2035 1.68333 43.6432 4.04803C46.0829 6.41274 47.3027 9.34864 47.3027 12.8499C47.3027 16.3531 46.1381 19.3377 43.8109 21.8019C41.4837 24.266 38.6177 25.498 35.2167 25.498C31.8137 25.498 28.922 24.2835 26.5376 21.8506C24.1531 19.4196 22.9629 16.5246 22.9629 13.1638C22.9629 11.3293 23.2984 9.61182 23.9696 8.00741C24.6407 6.40494 25.5368 5.06176 26.656 3.9798C27.7752 2.89785 29.0622 2.04593 30.5169 1.426C31.9716 0.809966 33.4718 0.5 35.0154 0.5ZM28.9062 13C28.9062 14.969 29.5497 16.5656 30.8367 17.7918C32.1236 19.018 33.5606 19.6321 35.1496 19.6321C36.7386 19.6321 38.1716 19.0356 39.4467 17.8425C40.7218 16.6494 41.3614 15.0469 41.3614 13.0351C41.3614 11.0232 40.7179 9.41103 39.4309 8.19456C38.1439 6.98004 36.705 6.3718 35.118 6.3718C33.529 6.3718 32.096 6.98589 30.8209 8.2121C29.5438 9.43442 28.9062 11.033 28.9062 13Z" className='color1'/>
                  <path d="M75.6343 1.72623C75.8139 2.05764 75.9205 2.35591 75.9541 2.62103C75.9876 2.88616 76.0054 3.27411 76.0054 3.78097V22.182C76.0054 23.7065 75.579 24.6033 74.7303 24.8684C74.3039 25.0009 73.767 25.0672 73.1196 25.0672C72.4702 25.0672 71.955 25.0126 71.576 24.9015C71.195 24.7904 70.9049 24.6578 70.7036 24.5038C70.5022 24.3498 70.3463 24.1276 70.2338 23.841C70.1213 23.4648 70.066 22.8916 70.066 22.1177V11.0096C69.5054 11.6958 68.6902 12.7836 67.6144 14.275C66.5407 15.7663 65.8577 16.7001 65.5656 17.0764C65.2754 17.4526 65.0721 17.7119 64.9616 17.8561C64.849 18.0004 64.5747 18.1992 64.1385 18.4527C63.7022 18.7061 63.2324 18.8348 62.7291 18.8348C62.2258 18.8348 61.7659 18.7178 61.3533 18.4858C60.9388 18.2538 60.6427 18.0277 60.4631 17.8055L60.1947 17.4409C59.7466 16.8892 58.8623 15.7117 57.5418 13.9104C56.2212 12.1091 55.5047 11.1422 55.3942 11.0096V22.184C55.3942 22.6928 55.3764 23.0749 55.3429 23.3283C55.3093 23.5817 55.2027 23.8644 55.0231 24.1744C54.6875 24.7709 53.8151 25.0692 52.4038 25.0692C51.0379 25.0692 50.1891 24.7709 49.8516 24.1744C49.6719 23.8644 49.5653 23.5778 49.5318 23.3127C49.4982 23.0476 49.4805 22.6499 49.4805 22.1196V3.71664C49.4805 3.20782 49.4982 2.82768 49.5318 2.5723C49.5653 2.31887 49.6719 2.0245 49.8516 1.69309C50.1871 1.11799 51.0596 0.831421 52.4709 0.831421C53.0749 0.831421 53.596 0.903551 54.0322 1.04781C54.4684 1.19207 54.7547 1.34023 54.8889 1.49619L55.0902 1.69504L62.7094 11.573C66.513 6.5999 69.0554 3.31699 70.3305 1.72623C70.7114 1.12969 71.6115 0.831421 73.0327 0.831421C74.4539 0.831421 75.3204 1.12969 75.6343 1.72623Z" className='color1'/>
                  <path d="M84.6308 19.2324H94.97C95.4852 19.2324 95.8701 19.2499 96.1286 19.2831C96.3853 19.3162 96.6833 19.4215 97.0189 19.5989C97.6229 19.9089 97.9249 20.7705 97.9249 22.1858C97.9249 23.7337 97.5104 24.6402 96.6833 24.9054C96.3023 25.0379 95.7201 25.1042 94.9364 25.1042H81.6424C80.0751 25.1042 79.1573 24.6851 78.8888 23.8448C78.7546 23.492 78.6875 22.9286 78.6875 22.1547V3.71657C78.6875 2.58978 78.9007 1.82169 79.3251 1.4123C79.7494 1.00291 80.5548 0.798218 81.7431 0.798218H94.97C95.4852 0.798218 95.8701 0.815763 96.1286 0.848904C96.3853 0.882045 96.6833 0.987316 97.0189 1.16472C97.6229 1.47468 97.9249 2.33635 97.9249 3.75166C97.9249 5.29954 97.5104 6.20605 96.6833 6.47117C96.3023 6.60374 95.7201 6.67002 94.9364 6.67002H84.6308V10.0192H91.2769C91.792 10.0192 92.1769 10.0368 92.4355 10.0699C92.6921 10.103 92.9902 10.2083 93.3257 10.3857C93.9297 10.6957 94.2318 11.5573 94.2318 12.9727C94.2318 14.5205 93.8054 15.427 92.9566 15.6922C92.5757 15.8247 91.9934 15.891 91.2117 15.891H84.6328V19.2324H84.6308Z" className='color1'/>
                  <path d="M106.051 20.1954H115.182C115.92 20.1954 116.457 20.2793 116.793 20.445C117.128 20.6107 117.351 20.87 117.464 21.2248C117.576 21.5776 117.631 22.0494 117.631 22.6342C117.631 23.221 117.576 23.6908 117.464 24.0437C117.351 24.3965 117.162 24.6402 116.893 24.7728C116.467 24.9931 115.887 25.1042 115.146 25.1042H103.06C101.493 25.1042 100.575 24.6851 100.307 23.8448C100.173 23.492 100.105 22.9286 100.105 22.1547V3.71657C100.105 3.20776 100.123 2.82762 100.157 2.57224C100.19 2.3188 100.297 2.02443 100.477 1.69302C100.79 1.09649 101.663 0.798218 103.096 0.798218C104.663 0.798218 105.591 1.20761 105.883 2.02443C105.996 2.40068 106.051 2.97578 106.051 3.74777V20.1954Z" className='color1'/>
                  <path d="M134.014 2.52156L143.078 21.022C143.459 21.7745 143.648 22.3379 143.648 22.7122C143.648 23.5076 142.999 24.227 141.702 24.8664C140.94 25.2426 140.342 25.4298 139.906 25.4298C139.469 25.4298 139.11 25.3304 138.832 25.1315C138.551 24.9327 138.35 24.7221 138.228 24.5018C138.105 24.2815 137.932 23.9501 137.707 23.5076L135.96 19.9264H126.661L124.916 23.5076C124.691 23.9501 124.517 24.2698 124.395 24.4687C124.272 24.6675 124.071 24.8722 123.791 25.0828C123.511 25.2933 123.153 25.3986 122.717 25.3986C122.281 25.3986 121.681 25.2114 120.921 24.8352C119.622 24.2172 118.975 23.5095 118.975 22.7142C118.975 22.3379 119.164 21.7745 119.545 21.024L128.609 2.49037C128.856 1.98155 129.231 1.57412 129.734 1.26415C130.238 0.954184 130.769 0.800176 131.329 0.800176C132.537 0.798226 133.431 1.37332 134.014 2.52156ZM131.294 10.4793L129.079 15.0216H133.544L131.294 10.4793Z" className='color1'/>
                  <path d="M163.02 12.0721C164.341 13.6199 165 15.355 165 17.2771C164.955 19.4878 164.189 21.3379 162.7 22.8312C161.212 24.3225 159.404 25.0692 157.278 25.0692H148.449C146.882 25.0692 145.964 24.65 145.695 23.8098C145.561 23.4336 145.494 22.8604 145.494 22.0865V3.6835C145.494 3.15324 145.512 2.76725 145.545 2.52356C145.579 2.27988 145.686 1.99331 145.865 1.6619C146.179 1.06536 147.052 0.76709 148.485 0.76709H156.945C159.003 0.76709 160.727 1.47475 162.114 2.88811C163.569 4.32487 164.295 6.05015 164.295 8.06006C164.295 9.51826 163.869 10.8556 163.02 12.0721ZM159.059 16.9457C159.059 16.4155 158.997 15.9963 158.873 15.6864C158.751 15.3764 158.543 15.1561 158.251 15.0236C157.803 14.8462 157.178 14.7584 156.372 14.7584C155.567 14.7584 154.963 14.6044 154.56 14.2945C154.157 13.9845 153.956 13.349 153.956 12.3879C153.956 11.4268 154.163 10.7913 154.578 10.4813C154.992 10.1713 155.679 10.0173 156.643 10.0173C157.537 10.0173 158.074 9.78534 158.253 9.32136C158.32 9.07768 158.354 8.67999 158.354 8.12829C158.354 7.57659 158.168 7.18864 157.799 6.96835C157.43 6.74806 156.876 6.63694 156.137 6.63694H151.437V19.2032H156.943C158.354 19.1993 159.059 18.4488 159.059 16.9457Z" className='color1'/>
                  <path d="M34.9157 17.0335C36.9499 17.0335 38.5989 15.1875 38.5989 12.9104C38.5989 10.6332 36.9499 8.78723 34.9157 8.78723C32.8815 8.78723 31.2324 10.6332 31.2324 12.9104C31.2324 15.1875 32.8815 17.0335 34.9157 17.0335Z" className='color2'/>
                  </g>
              </svg>
            </button>
              <ul>
                  {menuItem.map((item ,Index) => {
                    return(
                       <li className={toggleLink(Index)} key={Index}>
                        <NavLink to={item.link} key={Index} className={item.ClassName}
                        onClick={
                          ()=>{
                            setNavLinkToggle(Index)
                          }
                        }
                        >
                            {item.title} 
                        </NavLink>
                        <span className={toggleLink(Index)}></span>
                      </li>
                    )
                  })}
            </ul>
        </nav>
  )
}