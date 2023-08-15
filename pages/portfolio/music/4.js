import Music from '../../../components/pages/Portfolio/Music'
import Gallery from '../../../components/pages/Portfolio/Gallery'
import PhotoItem from '../../../components/pages/Portfolio/PhotoItem'

const photosObject = {
  'anti-flag__september-6-2016-anti-flag-buenos-aires-argentina__3R7A7379': { order: '005', span: 'x1y2' },
  'children-of-bodom__july-26-2019-children-of-bodom-oulu-finland___K7A3664': { order: '020' },
  'evergreen-terrace__august-10-2018-evergreen-terrace-villmar-germany__3R7A2713': { order: '012' },
  'offspring__august-13-2015-the-offspring-avanches-switzerland__3R7A3472': { order: '014' },
  'offspring__august-20-2019-the-offspring-loket-czech-republic__3R7A9103': { order: '009', span: 'x2y1' },
  'offspring__august-21-2015-the-offspring-st-polten-austria__3R7A6320': { order: '019' },
  'offspring__august-3-2019-the-offspring-barcelona-spain__PB0_3043': { order: '004', span: 'x1y2' },
  'offspring__august-6-2019-the-offspring-lokeren-belgium__3R7A4933': { order: '022', span: 'x2y1' },
  'offspring__july-9-2018-the-offspring-fete-du-bruit-landerneau-france__3R7A9815': {
    order: '018',
    span: 'x2y2'
  },
  'offspring__june-15-2018-the-offspring-pinkpop-landgraaf-the-netherlands__PB0_2745': { order: '015' },
  'offspring__november-17-2019-the-offspring-place-bell-laval-canada___K7A8752': { order: '024' },
  'offspring__november-27-2019-the-offspring-western-financial-place-cranbrook-canada___K7A9529': {
    order: '025'
  },
  'offspring__november-30-2019-the-offspring-abbotsford-centre-abbotsford-canada___K7A3528': { order: '030' },
  'progandhi__august-3-2019-propagandhi-barcelona-spain___K7A8199': { order: '026' },
  'rise-against__november-12-2017-rise-against-amsterdam-the-netherlands__IMG_0204': { order: '011' },
  'rise-against__november-17-2017-rise-against-mitsubishi-electric-halle-dusseldorf-germany__IMG_0733': {
    order: '010',
    span: 'x2y1'
  },
  'silverstein__august-11-2018-silverstein-villmar-germany__3R7A4762': { order: '002', span: 'x2y1' },
  'sum-41__december-2-2019-sum-41-kamloops-canada___K7A4229': { order: '016' },
  'sum-41__december-2-2019-sum-41-kamloops-canada___K7A4662': { order: '023', span: 'x2y2' },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands__G0012415': { order: '013', span: 'x1y2' },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands___K7A08208': { css: '35% 50%', order: '003' },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany__3R7A10262': {
    css: '52% 50%',
    order: '017',
    span: 'x1y3'
  },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany___K7A0857': {
    order: '027',
    span: 'x2y1'
  },
  'sum-41__june-20-2017-sum-41-ziggo-dome-amsterdam-the-netherlands__3R7A8557': {
    order: '001',
    span: 'x3y1'
  },
  'sum-41__march-12-2017-sum-41-laeronef-lille-france__3R7A7682': { order: '007' },
  'the-used__march-3-2016-the-used-knust-hamburg-germany__3R7A6330': { order: '021' },
  'wisdom-in-chains__august-10-2018-wisdom-in-chains-villmar-germany__3R7A2464': { order: '006' },
  'x-raiders__april-5-2019-x-raiders-hedon-zwolle-the-netherlands___K7A9975': { order: '028', span: 'x3y1' },
  'x-raiders__august-15-2018-x-raiders-wisseloord-studio-hilversum-the-netherlands__3R7A5688': {
    order: '031'
  },
  'x-raiders__february-7-2020-x-raiders-de-pul-uden-the-netherlands___K7A4382': { order: '029' },
  'zebrahead__january-23-2020-zebrahead-mitsubishi-electric-halle-dusseldorf-germany___K7A0472': {
    order: '008'
  }
}

const photos = []
for (const key in photosObject) {
  photos.push({
    id: key,
    order: photosObject[key].order,
    title: photosObject[key].title,
    span: photosObject[key].span,
    css: photosObject[key].css,
    mirror: photosObject[key].mirror
  })
}
photos.sort((a, b) => a['order'] - b['order'])

const MusicPage = () => {
  console.log(`Maybe there's a 5th page?!`)
  return (
    <Music page="4">
      <Gallery>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} src={`m/${photo.id}`} span={photo.span} title={photo.title ? photo.title : 'Music Photography by @tijsvl'} css={photo.css} />
        ))}
      </Gallery>
    </Music>
  )
}

export default MusicPage
