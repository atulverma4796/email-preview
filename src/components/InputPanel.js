import React from "react"
import { TextField, IconButton, Tooltip, Box, Button } from "@mui/material"
import { Person, Info } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import {
  updateSubject1,
  updateSubject2,
  updatePreviewText,
} from "../store/emailSlice"

function InputPanel() {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.email)

  const handleChange = (field, value) => {
    if (field === "subject1") dispatch(updateSubject1(value))
    else if (field === "subject2") dispatch(updateSubject2(value))
    else if (field === "previewText") dispatch(updatePreviewText(value))
  }

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          label="Subject Line 1"
          variant="outlined"
          fullWidth
          value={email.subject1}
          onChange={(e) => handleChange("subject1", e.target.value)}
          InputProps={{
            endAdornment: (
              <Tooltip title="AI suggestion">
                <IconButton>
                  <Person color="primary" />
                </IconButton>
              </Tooltip>
            ),
          }}
        />
        <Button variant="outlined" sx={{ whiteSpace: "nowrap" }}>
          Use AI
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          label="Subject Line 2"
          variant="outlined"
          fullWidth
          value={email.subject2}
          onChange={(e) => handleChange("subject2", e.target.value)}
          InputProps={{
            endAdornment: (
              <Tooltip title="AI suggestion">
                <IconButton>
                  <Person color="primary" />
                </IconButton>
              </Tooltip>
            ),
          }}
        />
        <Button variant="outlined" sx={{ whiteSpace: "nowrap" }}>
          Use AI
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          label="Preview Text"
          variant="outlined"
          fullWidth
          value={email.previewText}
          onChange={(e) => handleChange("previewText", e.target.value)}
          InputProps={{
            endAdornment: (
              <Tooltip title="Additional info">
                <IconButton>
                  <Info color="primary" />
                </IconButton>
              </Tooltip>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default InputPanel
