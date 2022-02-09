import Gallery from '../../../components/pages/Portfolio/Gallery';
import PhotoItem from '../../../components/pages/Portfolio/PhotoItem';

const photosObject = {
  '5km_testrun_2020_3R7A4971': { order: '038' },
  '5km_testrun_2020__K7A9517': { order: '009' },
  '5km_testrun_2020__K7A9613': { order: '023', span: 'x2y2' },
  '5km_testrun_2020__K7A9629': { order: '042', span: 'x2y1' },
  '5km_testrun_2020__K7A9708': { order: '014', span: 'x1y2' },
  '5km_testrun_2020__K7A9722': { css: '0% 50%', order: '020', span: 'x2y1' },
  '5km_testrun_2020__K7A9821': { css: '41.5% 50%', order: '043', span: 'x1y2' },
  '5km_testrun_2020__K7A9878': { order: '013', span: 'x1y2' },
  '5km_testrun_2020__K7A9903': { order: '005', span: 'x1y2' },
  marikenloop_2017_3R7A7584: { order: '053', span: 'x3y1' },
  marikenloop_2017_3R7A7763: { order: '017', span: 'x2y2' },
  marikenloop_2017_3R7A8015: { order: '018' },
  marikenloop_2018_3R7A0620: { order: '040', span: 'x2y1' },
  marikenloop_2018_3R7A0642: { order: '046', span: 'x3y1' },
  marikenloop_2018_3R7A0723: { order: '058', span: 'x3y1' },
  marikenloop_2019_marikenloop__K7A6136: { order: '027' },
  marikenloop_2019_marikenloop__K7A6252: { order: '028', span: 'x2y1' },
  marikenloop_2019_mini__K7A5915: { order: '021', span: 'x3y1' },
  marikenloop_2019_trail_3R7A6158: { order: '055', span: 'x2y1' },
  marikenloop_2019_trail_3R7A6165: { order: '025', span: 'x2y1' },
  marikenloop_2019_trail_3R7A6218: { css: '100% 0', order: '031' },
  marikenloop_2019_trail__K7A5095: { order: '001', span: 'x3y1' },
  marikenloop_2019_trail__K7A5101: { order: '011' },
  marikenloop_2019_trail__K7A5173: { order: '047', span: 'x2y2' },
  marikenloop_2019_trail__K7A5281: { order: '010' },
  marikenloop_2019_trail__K7A5377: { order: '029', span: 'x3y1' },
  mini_clinic_2018__K7A0007: { css: '40% 50%', order: '003', span: 'x1y2' },
  mini_clinic_2018__K7A0029: { order: '036' },
  mini_clinic_2018__K7A0038: { order: '037' },
  mini_clinic_2018__K7A9167: { order: '048' },
  mini_clinic_2018__K7A9203: { order: '049' },
  mini_clinic_2018__K7A9286: { order: '052' },
  mini_clinic_2018__K7A9550: { order: '026' },
  mini_clinic_2018__K7A9573: { css: '34% 0', order: '041', span: 'x1y2' },
  mini_clinic_2018__K7A9862: { order: '035', span: 'x2y2' },
  mini_clinic_2018__K7A9917: { order: '002', span: 'x2y1' },
  stevensloop_2018_3R7A3578: { order: '012', span: 'x2y1' },
  stevensloop_2019_zaterdag_PB0_8177: { order: '030', span: 'x2y1' },
  stevensloop_2019_zaterdag__K7A9681: { order: '033' },
  stevensloop_2019_zondag_3R7A5098: { order: '057' },
  stevensloop_2019_zondag__K7A0050: { order: '051', span: 'x2y2' },
  stevensloop_2019_zondag__K7A0230: { order: '039', span: 'x2y1' },
  stevensloop_2019_zondag__K7A0299: { order: '054' },
  stevensloop_2019_zondag__K7A0427: { order: '056', span: 'x2y1' },
  zevenheuvelenloop_2018_3R7A9261: { order: '016', span: 'x2y1' },
  zevenheuvelenloop_2018_3R7A9328: { css: '52% 50%', order: '019', span: 'x1y2' },
  zevenheuvelenloop_2018_3R7A9369: { order: '044', span: 'x2y1' },
  zevenheuvelenloop_2018_PB0_7801: { order: '006', span: 'x2y1' },
  zevenheuvelenloop_2018_PB0_7854: { order: '022' },
  zevenheuvelenloop_2018_PB0_7905: { order: '045', span: 'x2y1' },
  zevenheuvelenloop_2018_mini_PB0_7191: { order: '050' },
  zevenheuvelenloop_2018_mini_PB0_7251: { order: '015' },
  zevenheuvelenloop_2018_mini_PB0_7349: { order: '034' },
  zevenheuvelenloop_2018_mini_PB0_7365: { order: '024' },
  zevenheuvelennacht_2017_IMG_1253: { order: '004', span: 'x2y1' },
  zevenheuvelennacht_2018_3R7A7805: { order: '008', span: 'x3y1' },
  zevenheuvelennacht_2018_3R7A8195: { order: '032' },
  zevenheuvelennacht_2018_3R7A8609: { order: '007', span: 'x2y1' },
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

const SportsPage = () => {
  return (
    <section>
      <h1>Sports Photography</h1>
      <Gallery>
        {photos.map((photo) => (
          <PhotoItem
            key={photo.id}
            src={`s/${photo.id}`}
            span={photo.span}
            title={photo.title ? photo.title : 'Sports Photography by @tijsvl'}
            css={photo.css}
          />
        ))}
      </Gallery>
    </section>
  );
};

export default SportsPage;
