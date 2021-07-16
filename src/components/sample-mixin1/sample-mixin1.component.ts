import { Vue, Component } from 'vue-property-decorator';

import { OtherComponent } from '../other';

@Component({
  components: { OtherComponent },
})
export default class SampleMixin1Component extends Vue {
  protected mixinMessage1: string = 'Mixin1';
}
