import React from "react";
import RichText from '../components/RichText/'
import Wrapper from '../components/Wrapper/'
import Padder from '../components/Padder/'

export default () => {
  return(
    <Wrapper size="big">
      <Padder size="big">
        <RichText>
          <h1>Business Process Model and Notation</h1>
          <p>A standard Business Process Model and Notation (BPMN) will provide businesses with the capability of understanding their internal business procedures in a graphical notation and will give organizations the ability to communicate these procedures in a standard manner. Furthermore, the graphical notation will facilitate the understanding of the performance collaborations and business transactions between the organizations. This will ensure that businesses will understand themselves and participants in their business and will enable organizations to adjust to new internal and B2B business circumstances quickly.</p>
        </RichText>
        <Padder size="small">
          <img alt="screencast" src="static/screencast.gif" />
        </Padder>
        <RichText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus libero non quam ullamcorper, id pellentesque tortor viverra. Ut at velit massa. In fringilla, magna eget interdum sollicitudin, ante lorem volutpat nulla, id imperdiet sem dui id sapien. Pellentesque tristique rhoncus luctus. Etiam ac orci id mauris pulvinar vestibulum. Curabitur sit amet blandit lacus. Maecenas eu consectetur enim, et iaculis elit. Nunc purus augue, eleifend tincidunt rhoncus nec, viverra at est. Morbi placerat sed augue eu iaculis.

Mauris fermentum ex vel lorem rutrum, eget viverra nunc porttitor. Aliquam porttitor tortor facilisis mi pharetra, eget lobortis arcu sagittis. Sed non congue purus. Aenean sit amet euismod felis, in faucibus dui. Suspendisse libero justo, pellentesque quis sapien eu, condimentum sagittis leo. Cras a luctus neque. Sed eu sagittis est. Morbi volutpat ornare tincidunt. Mauris mi nisi, auctor at rutrum vel, dignissim vitae libero. Donec tempor dui nisi. Sed pellentesque, augue et suscipit consectetur, quam sem consectetur lectus, vitae vehicula enim ante in felis. Quisque dictum, neque eget facilisis maximus, mauris orci lobortis ligula, id porttitor magna urna non lectus. Donec ut dui purus. Sed consequat, nisl in rhoncus lobortis, lorem arcu aliquam nunc, aliquet varius dui dolor auctor metus.

Duis facilisis mi est, quis fringilla diam sagittis sed. Cras ornare nec diam vel bibendum. Praesent gravida mauris ut neque pellentesque facilisis. Praesent id pharetra lorem, ut ultricies dolor. Aenean congue congue enim, vel aliquet odio interdum ac. Phasellus luctus ultricies arcu non eleifend. Mauris rutrum, enim sed condimentum mattis, mauris nibh faucibus tellus, quis facilisis ligula sem vel magna.

Sed quis suscipit arcu. Proin sed purus feugiat, laoreet erat at, facilisis nisi. Nunc vel porttitor dui. Sed quis urna nec felis venenatis consectetur. Donec sollicitudin massa quis lorem dictum feugiat. Sed fermentum rhoncus mauris, ac dignissim dolor fermentum sed. Aenean lobortis sagittis erat, nec consequat augue. Nullam et eleifend turpis. In vel turpis felis. Integer vulputate orci justo, vel dapibus nunc ultrices at.

Pellentesque bibendum sapien risus, vel dapibus risus rutrum mattis. Vestibulum lobortis sed nibh non tristique. Nam posuere tellus sed dolor dictum maximus. Vestibulum venenatis dignissim turpis eu porta. Phasellus nec magna et lorem consectetur tempus dignissim eu libero. Ut consectetur hendrerit laoreet. Phasellus posuere pellentesque quam, a dictum leo maximus a. Maecenas molestie turpis ex, ut convallis lorem tincidunt eu. Pellentesque ac tellus ante. Cras justo turpis, congue ut ante eget, iaculis accumsan justo. Fusce vitae pellentesque dui, sed feugiat mi.
        </RichText>
      </Padder>
    </Wrapper>
  )
}
