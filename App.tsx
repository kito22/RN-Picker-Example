import React from 'react';
import {SafeAreaView} from 'react-native';
import {Select} from './src/components/Picker';

const OPTIONS = [
  {
    value: 'op_01',
    label: 'Opção 01',
  },
  {
    value: 'op_02',
    label: 'Opção 02',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <Select options={OPTIONS} onValueChange={value => console.log(value)} />
    </SafeAreaView>
  );
};

export default App;
