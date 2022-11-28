import { mount } from '@vue/test-utils'
import DoggiesSearchFormVue from '@/components/DoggiesSearchForm.vue'

describe('SearchForm', () => {
  test('renders properly', async () => {
    const wrapper = mount(DoggiesSearchFormVue)
    const input = wrapper.find('input')

    await input.setValue('0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6')

    expect(input.element.value).toBe(
      '0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6'
    )
  })
})
