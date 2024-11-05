import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function PreviewPanel() {
  const [currentTime, setCurrentTime] = useState("")
  const email = useSelector((state) => state.email)

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateDateTime()
    const timer = setInterval(updateDateTime, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: 5,
        border: 1,
        borderColor: "grey.300",
        backgroundColor: "white",
        width: "100%",
        maxWidth: 300,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{ padding: "8px", backgroundColor: "#f8f8f8", textAlign: "center" }}
      >
        <Typography variant="caption" color="textSecondary">
          {currentTime}
        </Typography>
      </Box>

      <Box sx={{ padding: 2, flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6">Inbox</Typography>
          <Typography variant="body2" color="textSecondary">
            {currentTime}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {email.subject1 || "Sample Subject 1"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {email.previewText || "Sample preview text for the email."}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "secondary.main" }}
          >
            {email.subject2 || "Sample Subject 2"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {email.previewText || "Another preview text sample."}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          textAlign: "center",
          padding: "8px",
          color: "textSecondary",
        }}
      >
        Actual email preview may vary depending on the email client.
      </Typography>
    </Box>
  )
}

export default PreviewPanel
