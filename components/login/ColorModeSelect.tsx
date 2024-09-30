import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import { IconButton } from '@mui/material';

import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();

  // Define o tema inicial como "light" se o modo for "system"
  React.useEffect(() => {
    if (mode === "system") {
      setMode("light");
    }
  }, [mode, setMode]);

  const toggleChange = ()  => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  }

  return (
      <IconButton
      size="small"
      color="primary"
      aria-label="Theme toggle button"
      onClick={toggleChange}
      sx={{
        position: "fixed", right:"2rem", top: "1rem"
      }}
>
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}
