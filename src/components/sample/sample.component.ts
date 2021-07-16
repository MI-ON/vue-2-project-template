import { Mixins, Component, Prop } from 'vue-property-decorator';

import { SampleMixin1ComponentClass } from '../sample-mixin1';
import { SampleMixin2ComponentClass } from '../sample-mixin2';

@Component({
})
export default class SampleComponent extends Mixins(
  SampleMixin1ComponentClass,
  SampleMixin2ComponentClass,
) {
  @Prop({ default: 'Message' }) protected message!: string;

  public mounted(): void {
    console.log(this.message);
    console.log(this.mixinMessage1);
    console.log(this.mixinMessage2);
  }
}
