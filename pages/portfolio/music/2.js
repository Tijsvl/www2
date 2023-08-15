import Music from '../../../components/pages/Portfolio/Music'
import Gallery from '../../../components/pages/Portfolio/Gallery'
import PhotoItem from '../../../components/pages/Portfolio/PhotoItem'

const photosObject = {
  'anti-flag__september-10-2016-anti-flag-bogota-colombia__3R7A8674': { order: '025', span: 'x3y1' },
  'anti-flag__september-6-2016-anti-flag-buenos-aires-argentina__3R7A7634': { order: '022' },
  'bullet-for-my-valentine__august-10-2019-bullet-for-my-valentine-puttlingen-germany__3R7A5772': {
    order: '013',
    span: 'x1y2'
  },
  'dropkick-murphys__february-18-2018-dropkick-murphys-amsterdam-the-netherlands__3R7A0975': { order: '002' },
  'dropkick-murphys__february-3-2018-dropkick-murphys-dortmund-germany__IMG_2847': {
    order: '015',
    span: 'x3y1'
  },
  'get-the-shot__august-11-2018-get-the-shot-villmar-germany__3R7A4128': { order: '019', span: 'x3y1' },
  'macklemore__august-17-2019-macklemore-st-polten-austria__3R7A7844': { order: '003', span: 'x2y1' },
  'macklemore__august-17-2019-macklemore-st-polten-austria___K7A9744': { order: '017' },
  'macklemore__august-17-2019-macklemore-st-polten-austria___K7A9837': { order: '008' },
  'offspring__august-20-2019-the-offspring-loket-czech-republic___K7A2679': { order: '012' },
  'offspring__august-7-2019-the-offspring-frankfurt-germany__3R7A5476': { order: '016', span: 'x2y2' },
  'offspring__june-22-2016-the-offspring-hammersmith-apollo-london-england__IMG_0469': { order: '005' },
  'offspring__november-13-2019-the-offspring-avenir-center-moncton-canada__G0038412': { order: '006' },
  'offspring__november-17-2019-the-offspring-place-bell-laval-canada___K7A9347': {
    order: '010',
    span: 'x2y1'
  },
  'rise-against__november-17-2017-rise-against-mitsubishi-electric-halle-dusseldorf-germany__IMG_0545': {
    order: '024'
  },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands__3R7A7001': { order: '030', span: 'x3y1' },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands__3R7A7252': { order: '001', span: 'x3y1' },
  'sum-41__january-22-2020-sum-41-amsterdam-the-netherlands___K7A07790': { order: '028' },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany__G0013620': { order: '021' },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany___K7A2741': { order: '007' },
  'sum-41__march-10-2017-sum-41-tilburg-the-netherlands__IMG_3132': { order: '018' },
  'sum-41__march-12-2017-sum-41-laeronef-lille-france__3R7A8257': { order: '033' },
  'sum-41__march-12-2017-sum-41-laeronef-lille-france__IMG_3941': { order: '014' },
  'sum-41__november-27-2019-sum-41-western-financial-place-cranbrook-canada___K7A8903': { order: '027' },
  'the-hives__july-31-2019-the-hives-estavayer-le-lac-switzerland___K7A____': { order: '034', span: 'x3y1' },
  'the-used__august-21-2018-the-used-zeche-bochum-germany__3R7A5942': { order: '026', span: 'x2y1' },
  'the-used__august-21-2018-the-used-zeche-bochum-germany__3R7A5970': { order: '032' },
  'wisdom-in-chains__august-10-2018-wisdom-in-chains-villmar-germany__3R7A2596': { order: '031' },
  'x-raiders__june-15-2019-x-raiders-op-de-toffel-vierlingsbeek-the-netherlands___K7A5355': {
    order: '020',
    span: 'x1y2'
  },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A6787': { order: '004', span: 'x2y1' },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A6885': { order: '023' },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A7717': { order: '029', span: 'x2y1' },
  'zebrahead__january-23-2020-zebrahead-mitsubishi-electric-halle-dusseldorf-germany___K7A0384': {
    order: '009'
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
  return (
    <Music page="2">
      <Gallery>
        {photos.map((photo) => (
          <PhotoItem key={photo.id} src={`m/${photo.id}`} span={photo.span} title={photo.title ? photo.title : 'Music Photography by @tijsvl'} css={photo.css} />
        ))}
      </Gallery>
    </Music>
  )
}

export default MusicPage
