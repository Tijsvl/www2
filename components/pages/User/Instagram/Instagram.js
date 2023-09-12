/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
// import { useEffect } from 'react'
import Head from 'next/head'

// import Instafeed from 'instafeed.js'
import InstagramHead from './InstagramHead'

import classes from './Instagram.module.scss'

const Instagram = (props) => {
  // const accessToken = props.account === 'lookwhatiso' ? process.env.NEXT_PUBLIC_INSTAGRAM_LOOKWHATISO : process.env.NEXT_PUBLIC_INSTAGRAM_TIJSVL

  // useEffect(() => {
  //   const feed = new Instafeed({
  //     accessToken,
  //     template: '<li class="disabled ui-state-default ui-state-disabled" draggable="false"><img src="{{image}}" /></li>',
  //     limit: 17
  //   })
  //   feed.run()

  //   const dropzone = document.getElementById('instafeed')
  //   const placeholder = document.getElementById('placeholder')

  //   if (dropzone !== null) {
  //     // Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
  //     dropzone.addEventListener('dragover', function (e) {
  //       e.stopPropagation()
  //       e.preventDefault()
  //       e.dataTransfer.dropEffect = 'copy'
  //     })

  //     // Get file data on drop
  //     dropzone.addEventListener('drop', function (e) {
  //       // console.log(e);
  //       e.stopPropagation()
  //       e.preventDefault()
  //       const files = e.dataTransfer.files // Array of all files

  //       for (let i = 0, file; (file = files[i]); i++) {
  //         if (file.type.match(/image.*/)) {
  //           const reader = new FileReader()

  //           reader.onload = function (e2) {
  //             // finished reading file data.
  //             const li = document.createElement('li')
  //             const img = document.createElement('img')
  //             img.src = e2.target.result
  //             li.appendChild(img)
  //             li.setAttribute('onclick', 'remove(this)')
  //             placeholder.remove()
  //             dropzone.insertBefore(li, dropzone.firstChild)
  //           }

  //           reader.readAsDataURL(file) // start reading the file data.
  //         }
  //       }
  //     })
  //   }
  // })

  return (
    <>
      <Head>
        <title>@{props.account} | Instagram Planner</title>
      </Head>
      {/* <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> */}
      {/* <script src="/assets/instagram/dragndrop.js"></script> */}
      {/* <div
        style={{
          background: '#fafafa',
          position: 'absolute',
          inset: 0,
          zIndex: -999
        }}
      ></div> */}
      <section className={classes.instagram}>
        <InstagramHead />
        <p>Page disabled</p>
        {/* <p className={classes.info}>
          Data pulled from{' '}
          <a href={`https://instagram.com/${props.account}`} target="_blank" rel="noreferrer">
            @{props.account}
          </a>
        </p>

        <ul className={classes.ui}>
          <li className={classes.active}>
            <img src="/assets/instagram/icon-posts.svg" alt="Post icon" />
            <span>Posts</span>
          </li>
          <li>
            <img src="/assets/instagram/icon-guides.svg" alt="Guides icon" />
            <span>Guides</span>
          </li>
          <li>
            <img src="/assets/instagram/icon-reels.svg" alt="Reels icon" />
            <span>Reels</span>
          </li>
          <li>
            <img src="/assets/instagram/icon-videos.svg" alt="Videos icon" />
            <span>Videos</span>
          </li>
          <li>
            <img src="/assets/instagram/icon-saved.svg" alt="Saved icon" />
            <span>Saved</span>
          </li>
          <li>
            <img src="/assets/instagram/icon-tagged.svg" alt="Tagged icon" />
            <span>Tagged</span>
          </li>
        </ul>

        <div id="dragndrop" className={classes.dragndrop}>
          <ul id="instafeed" suppressHydrationWarning={true}>
            <li id="placeholder" className={classes.droparea + ' disabled '} draggable="false" suppressHydrationWarning={true}>
              Drag image(s) here
            </li>
          </ul>
        </div> */}
      </section>
    </>
  )
}

export default Instagram
