import { Vue, Component } from 'vue-property-decorator';

import { OtherComponent } from '../other';

@Component({
  components: { OtherComponent },
})
export default class SampleMixin2Component extends Vue {
  protected mixinMessage2: string = 'Mixin2';
}
