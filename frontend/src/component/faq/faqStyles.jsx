import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box"
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { blue } from "@mui/material/colors"
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'


export const Container = styled(Box)(() => ({
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}))

export const Accordion = styled((props) => {
    const { expand, expandPanel, setExpandPanel, ...rem } = props

    return (
        <MuiAccordion
            expanded={expandPanel === expand}
            disableGutters
            elevation={1}
            square
            onChange={(e, isExpanded) => {
                setExpandPanel(isExpanded ? expand : false)
            }}
            {...rem}
        />
    )
})(({ theme }) => ({
    width: "100%",
    borderRadius: "0.7rem",
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}))

export const SummarySection = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '&:hover': {
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    }
}))

export const SummaryDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    display: "flex",
    '& .ac_link': {
        color: blue[400]
    }
}))