import Music from '../../../components/pages/Portfolio/Music'
import Gallery from '../../../components/pages/Portfolio/Gallery'
import PhotoItem from '../../../components/pages/Portfolio/PhotoItem'

const photosObject = {
  'anti-flag__september-6-2016-anti-flag-buenos-aires-argentina__3R7A7463': { order: '015' },
  'bullet-for-my-valentine__august-10-2019-bullet-for-my-valentine-puttlingen-germany___K7A2310': {
    order: '007'
  },
  'bullet-for-my-valentine__august-10-2019-bullet-for-my-valentine-puttlingen-germany___K7A2494': {
    order: '025'
  },
  'bullet-for-my-valentine__august-11-2019-bullet-for-my-valentine-eschwege-germany___K7A3790': {
    order: '018',
    span: 'x2y1'
  },
  'evergreen-terrace__august-10-2018-evergreen-terrace-villmar-germany__3R7A2713': {
    order: '016',
    span: 'x2y2'
  },
  'flogging-molly__august-22-2018-flogging-molly-tilburg-the-netherlands__3R7A7215': {
    order: '021',
    span: 'x2y1'
  },
  'heideroosjes__august-6-2019-heideroosjes-lokeren-belgium__PB0_3433': { order: '017' },
  'macklemore__august-17-2019-macklemore-st-polten-austria___K7A9724': { order: '001', span: 'x3y1' },
  'offspring__august-14-2019-the-offspring-rimini-italy__G0013471': { order: '027' },
  'offspring__august-18-2019-the-offspring-grossposna-germany__3R7A8468': { order: '022', span: 'x3y1' },
  'offspring__august-20-2019-the-offspring-loket-czech-republic___K7A3294': { order: '004' },
  'offspring__august-23-2019-the-offspring-vilar-de-mouros-portugal___K7A5345': {
    order: '006',
    span: 'x2y2'
  },
  'offspring__august-6-2019-the-offspring-lokeren-belgium__G0019515': { order: '009' },
  'offspring__december-2-2019-the-offspring-kamloops-canada___K7A5007': { order: '013' },
  'offspring__december-2-2019-the-offspring-kamloops-canada___K7A5350': { order: '023' },
  'offspring__june-10-2016-the-offspring-nova-rock-nickelsdorf-austria__IMG_5768': { order: '011' },
  'offspring__november-16-2019-the-offspring-sudbury-arena-sudbury-canada__PB0_7364': { order: '020' },
  'rise-against__november-12-2017-rise-against-amsterdam-the-netherlands__3R7A3042': {
    order: '012',
    span: 'x2y2'
  },
  'rise-against__november-17-2017-rise-against-mitsubishi-electric-halle-dusseldorf-germany__IMG_0545': {
    order: '005'
  },
  'sum-41__december-2-2019-sum-41-kamloops-canada___K7A4587': { order: '024' },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands___K7A09859': { order: '026', span: 'x3y1' },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany__G0013620': { order: '003' },
  'sum-41__june-20-2017-sum-41-ziggo-dome-amsterdam-the-netherlands__3R7A8432': { order: '010' },
  'the-hives__july-31-2019-the-hives-estavayer-le-lac-switzerland___K7A5683': { order: '019' },
  'the-menzingers__august-11-2018-the-menzingers-villmar-germany__3R7A4457': { order: '014' },
  'the-used__march-4-2016-the-used-knust-hamburg-germany__IMG_0149': { order: '008' },
  'wisdom-in-chains__august-10-2018-wisdom-in-chains-villmar-germany__3R7A2464': { order: '029' },
  'x-raiders__june-15-2019-x-raiders-op-de-toffel-vierlingsbeek-the-netherlands___K7A5355': {
    order: '002',
    span: 'x1y2'
  },
  'x-raiders__june-15-2019-x-raiders-op-de-toffel-vierlingsbeek-the-netherlands___K7A6000': { order: '028' },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A6885': { order: '005' }
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
  return (
    <Music page="3">
      <Gallery>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} src={`m/${photo.id}`} span={photo.span} title={photo.title ? photo.title : 'Music Photography by @tijsvl'} css={photo.css} />
        ))}
      </Gallery>
    </Music>
  )
}

export default MusicPage
