import Head from 'next/head';

import Music from '../../../components/pages/Portfolio/Music';
import Gallery from '../../../components/pages/Portfolio/Gallery';
import PhotoItem from '../../../components/pages/Portfolio/PhotoItem';

const photosObject = {
  _K7A7733: { order: '001', span: 'x3y1' },
  'atreyu__june-9-2019-atreyu-nurburg-germany__PB0_0042': {
    order: '024',
    span: 'x3y1',
  },
  'offspring__august-11-2019-the-offspring-eschwege-germany___K7A4750': {
    order: '008',
    span: 'x2y2',
  },
  'offspring__august-13-2015-the-offspring-avanches-switzerland__3R7A3358': {
    order: '006',
    span: 'x2y2',
  },
  'offspring__august-15-2019-the-offspring-lignano-italy__G0014240': {
    order: '019',
  },
  'offspring__august-23-2019-the-offspring-vilar-de-mouros-portugal__3R7A9898':
    { order: '011' },
  'offspring__august-3-2019-the-offspring-barcelona-spain___K7A8963': {
    order: '015',
  },
  'offspring__july-8-2018-the-offspring-beauregard-music-festival-herouville-saint-clair-france__3R7A9147':
    {
      order: '003',
    },
  'offspring__june-10-2016-the-offspring-nova-rock-nickelsdorf-austria__IMG_5718':
    { order: '007' },
  'offspring__june-22-2018-the-offspring-hurricane-festival-scheessel-germany__PB0_6271':
    { order: '004' },
  'offspring__november-17-2019-the-offspring-place-bell-laval-canada__3R7A2050':
    {
      order: '002',
      span: 'x2y2',
    },
  'offspring__november-23-2019-the-offspring-affinity-place-estevan-canada___K7A5756':
    { order: '023' },
  'offspring__november-30-2019-the-offspring-abbotsford-centre-abbotsford-canada___K7A3438':
    {
      order: '012',
      span: 'x2y2',
    },
  'progandhi__august-3-2019-propagandhi-barcelona-spain___K7A8395': {
    order: '010',
  },
  'rise-against__november-12-2017-rise-against-amsterdam-the-netherlands__3R7A2999':
    {
      order: '029',
      span: 'x2y1',
    },
  'rise-against__november-17-2017-rise-against-mitsubishi-electric-halle-dusseldorf-germany__IMG_1067':
    {
      order: '016',
      span: 'x2y1',
    },
  'sum-41__august-20-2016-sum-41-lowlands-biddinghuizen-the-netherlands__3R7A5983':
    {
      css: '45% 50%',
      order: '018',
    },
  'sum-41__december-2-2019-sum-41-kamloops-canada___K7A4677': { order: '022' },
  'sum-41__february-22-2017-sum-41-zenith-paris-france__3R7A2193': {
    css: '33% 50%',
    order: '030',
  },
  'sum-41__january-23-2020-sum-41-mitsubishi-electric-halle-dusseldorf-germany__G0013620':
    {
      css: '42% 50%',
      order: '027',
      span: 'x1y2',
    },
  'sum-41__march-12-2017-sum-41-laeronef-lille-france__3R7A8713': {
    order: '009',
  },
  'sum-41__march-8-2017-sum-41-ancienne-belgique-brussels-belgium__3R7A4864': {
    order: '028',
    span: 'x2y1',
  },
  'sum-41__november-16-2019-sum-41-sudbury-arena-sudbury-canada___K7A6962': {
    order: '021',
  },
  'sum-41__november-29-2019-sum-41-south-okanagan-events-centre-penticton-canada___K7A0790':
    { order: '020' },
  'sum-41__november-29-2019-sum-41-south-okanagan-events-centre-penticton-canada___K7A0949':
    {
      order: '032',
      span: 'x3y1',
    },
  'the-used__august-21-2018-the-used-zeche-bochum-germany__PB0_4798': {
    order: '017',
    span: 'x3y1',
  },
  'x-raiders__april-15-2018-x-raiders-tamtam-deurne-the-netherlands__3R7A7845':
    {
      order: '031',
      span: 'x2y1',
    },
  'x-raiders__april-20-2019-x-raiders-bibelot-dordrecht-the-netherlands___K7A2230':
    { order: '013' },
  'x-raiders__august-15-2018-x-raiders-wisseloord-studio-hilversum-the-netherlands__3R7A5688':
    {
      order: '014',
      span: 'x3y1',
    },
  'x-raiders__june-2-2018-x-raiders-patronaat-haarlem-the-netherlands__3R7A1490':
    {
      order: '025',
      span: 'x2y1',
    },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A6830': {
    order: '026',
  },
  'zebrahead__january-22-2020-zebrahead-amsterdam-the-netherlands___K7A7036': {
    order: '005',
  },
};

const photos = [];
for (const key in photosObject) {
  photos.push({
    id: key,
    order: photosObject[key].order,
    title: photosObject[key].title,
    span: photosObject[key].span,
    css: photosObject[key].css,
    mirror: photosObject[key].mirror,
  });
}
photos.sort((a, b) => a['order'] - b['order']);

const MusicPage = () => {
  return (
    <>
      <Music page="1">
        <Gallery>
          {photos.map((photo) => (
            <PhotoItem
              key={photo.id}
              src={`m/${photo.id}`}
              span={photo.span}
              title={photo.title ? photo.title : 'Music Photography by @tijsvl'}
              css={photo.css}
            />
          ))}
        </Gallery>
      </Music>
    </>
  );
};

export default MusicPage;
