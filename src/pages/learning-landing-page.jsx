import { Meta } from '../layout/Meta.tsx';
import { MarketingPage } from '../templates/MarketingPage.tsx';

const LearningLandingPage = () => (
  <MarketingPage meta={<Meta title={Title} description={description} />}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </MarketingPage>
);

export default LearningLandingPage;
