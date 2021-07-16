import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class VuexSampleComponent extends Vue {
  protected get count(): number {
    return this.$store.getters['VuexSampleStore/count'];
  }

  protected increaseCount(): void {
    this.$store.dispatch('VuexSampleStore/increaseCount');
  }

  protected decreaseCount(): void {
    this.$store.dispatch('VuexSampleStore/decreaseCount');
  }
}
