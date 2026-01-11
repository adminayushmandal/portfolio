import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const theme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          "50": "{gray.100}",
          "100": "{gray.100}",
          "200": "{gray.200}",
          "300": "{gray.300}",
          "400": "{gray.400}",
          "500": "{gray.500}",
          "600": "{gray.600}",
          "700": "{gray.700}",
          "800": "{gray.800}",
          "900": "{gray.900}",
          "950": "{gray.950}",
        },
      },
      dark: {
        surface: {
          "50": "{slate.100}",
          "100": "{slate.100}",
          "200": "{slate.200}",
          "300": "{slate.300}",
          "400": "{slate.400}",
          "500": "{slate.500}",
          "600": "{slate.600}",
          "700": "{slate.700}",
          "800": "{slate.800}",
          "900": "{slate.900}",
          "950": "{slate.950}",
        }
      },
    },
    primary: {
      '50': '{amber.100}',
      '100': '{amber.100}',
      '200': '{amber.200}',
      '300': '{amber.300}',
      '400': '{amber.400}',
      '500': '{amber.500}',
      '600': '{amber.600}',
      '700': '{amber.700}',
      '800': '{amber.800}',
      '900': '{amber.900}',
      '950': '{amber.950}',
    },
  },
  components: {
    tabs: {
      colorScheme: {
        dark: {
          tab: {
            background: 'transparent',
            activeColor: '{gray.100}',
            color: '{slate.400}',
            activeBackground: '{gray.600}',
            padding: '0.25rem 0.25rem',
            borderWidth: '0'
          },
          tablist: {
            background: "{gray.800}",
            borderColor: "transparent",
            borderWidth: "0"
          },
          tabpanel: {
            background: "transparent",
            padding: "0.75rem 0"
          },
          activeBar: {
            background: "none"
          }
        },
        light: {
          tab: {
            background: 'white',
            activeColor: '{gray.900}',
            color: '{slate.600}',
            activeBackground: '{gray.300}',
            padding: '0.25rem 0.25rem',
            borderWidth: '0'
          },
          tablist: {
            background: "white",
            borderColor: "transparent",
            borderWidth: "0"
          },
          tabpanel: {
            background: "transparent",
            padding: "0.75rem 0"
          },
        },
      },
    }
  }
})
