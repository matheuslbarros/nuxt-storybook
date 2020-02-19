import { storiesOf } from '@storybook/vue'
import Logo from '../components/Logo'

storiesOf('Logo', module)
  .add('Default', () => ({
    components: { Logo },
    template: '<Logo />'
  }))
