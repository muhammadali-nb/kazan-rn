import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined
  Settings: undefined
  VehicleDetail: {
    id: number
  }
  MapPage: {
    address?: object
    car_id: string
    driver: string
  }
  Training: undefined,
  Earning: {
    id: string
  },
  Tab: undefined,
  Statistic: {
    id: string
  }
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>