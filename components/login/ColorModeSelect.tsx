import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();

  React.useEffect(() => {
    if (!mode) {
      setMode('light');
    }
  }, [mode, setMode]);

  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(e) => setMode(e.target.value as  'light' | 'dark')}
      SelectDisplayProps={{
        // @ts-ignore
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
          <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}
