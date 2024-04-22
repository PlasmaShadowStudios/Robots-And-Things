/* eslint-disable */
import Header from './Header';

export default {
  title: "Header",
};

export const Default = () => <Header headerLinks={['/about', 'test']} headerNames={['About', 'Test']} />;

Default.story = {
  name: 'default',
};
